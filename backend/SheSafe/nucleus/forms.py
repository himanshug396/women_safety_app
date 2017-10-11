from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import ReadOnlyPasswordHashField

from django.conf import settings

class UserCreationForm(forms.ModelForm):
    """A form for creating new users, used by admin
    Includes all the required fields, plus a repeated password.
    """

    error_messages = {
        'duplicate_phone': 'A user with that phone number already exists.',
        'password_mismatch': "The two password fields didn't match.",
    }

    name = forms.CharField(
        label="Name",
        required = False,
    )

    phone = forms.CharField(
        label="Phone number",
        required = True,
    )

    class Meta:
        model = get_user_model()
        fields = ('name', 'phone',)

    def save(self, commit=True):
        """Save user.
        Save the provided password in hashed format.
        :return custom_user.models.EmailUser: user
        """
        user = super(UserCreationForm, self).save(commit=False)
        user.set_password(settings.MASTER_PASSWORD)
        if commit:
            user.save()
        return user

class UserChangeForm(forms.ModelForm):

    """A form for updating users used by admin.
    Includes all the fields on the user, but replaces the password field
    with admin's password hash display field.
    """

    password = ReadOnlyPasswordHashField(label="Password", help_text=
        "Raw passwords are not stored, so there is no way to see "
        "this user's password, but you can change the password "
        "using <a href=\"../password/\">this form</a>.")

    class Meta:
        model = get_user_model()
        exclude = ()

    def __init__(self, *args, **kwargs):
        """Init the form."""
        super(UserChangeForm, self).__init__(*args, **kwargs)
        f = self.fields.get('user_permissions', None)
        if f is not None:
            f.queryset = f.queryset.select_related('content_type')

    def clean_password(self):
        """Clean password.
        Regardless of what the user provides, return the initial value.
        This is done here, rather than on the field, because the
        field does not have access to the initial value.
        :return str password:
        """
        return self.initial["password"]


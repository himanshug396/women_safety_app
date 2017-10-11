from __future__ import unicode_literals

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import UserChangeForm, UserCreationForm
from .models import *

class UserAdmin(UserAdmin):
    """User Admin model."""
    fieldsets = (
        (
            None, {'fields': ('name', 'phone', 'password')}),
            ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser',
                                       'groups', 'user_permissions')}),
            ('Important dates', {'fields': ('last_login', 'date_joined')}
        ),
    )

    add_fieldsets = (
        (
            None, {
                'classes': ('wide',),
                'fields': ('name', 'phone',)
            }
        ),
    )

    # Overiding default forms to add and change user instances
    form = UserChangeForm
    add_form = UserCreationForm

    # Customizing Admin view for User
    list_display = ('id', 'name', 'phone', 'is_staff')
    list_filter = ('is_staff', 'is_superuser', 'is_active','groups')
    search_fields = ('name', 'phone',)
    ordering = ('name', 'phone',)
    filter_horizontal = ('groups', 'user_permissions',)

admin.site.register(User, UserAdmin)
admin.site.register(City)
admin.site.register(Area)

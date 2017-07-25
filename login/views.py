from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, logout, authenticate
from django.contrib.messages import error, info

def user_login(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return login_successful(request)
    else:
        error(request, 'Please Enter a Valid Login')
        return redirect('choices')

def user_logout(request):
    logout(request)
    return redirect('home')

@login_required
def login_successful(request):
    info(request, 'Login Successful!')
    return redirect('home')

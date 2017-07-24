from django.shortcuts import render, get_object_or_404, redirect

def base(request):
    return render(request, 'base.html')

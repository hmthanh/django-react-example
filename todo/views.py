# Create your views here.
from rest_framework import generics

from .models import TodoItem
from .serializers import TodoSerializer


class TodoList(generics.ListCreateAPIView):
    queryset = TodoItem.objects.all()
    serializer_class = TodoSerializer


class TodoRUD(generics.RetrieveUpdateDestroyAPIView):
    queryset = TodoItem.objects.all()
    serializer_class = TodoSerializer

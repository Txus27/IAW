import { NextResponse } from 'next/server';
import axios from 'axios';

const API_URL = 'http://juanluis.com/tareas'; // Aquí vala URL de la API

export async function GET(request, { params }) {
  const { id } = params;
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return NextResponse.json(response.data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return NextResponse.json({ error: 'Tarea no encontrada' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Error al obtener la tarea' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    await axios.delete(`${API_URL}/${id}`);
    return NextResponse.json({ message: 'Tarea eliminada' }, { status: 201 });
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return NextResponse.json({ error: 'Tarea no encontrada' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Error al eliminar la tarea' }, { status: 500 });
  }
}
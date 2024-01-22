package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.TareaModel;
import com.example.demo.repositories.TareaRepository;

@Service
public class TareaService {
	
	@Autowired
	TareaRepository tareaRepository;
	
	//metodo para obtener tareas
	public List<TareaModel> obtenerTareas(){
		return tareaRepository.findAll();
	}
	
	//metodo para obtener tareas segun id
	
	public Optional<TareaModel> obtenerTareaPorId(int id) {
		
		return tareaRepository.findById(id);
	
	}
	
	//metodo para insertar una tarea
	
	public String crearTarea(TareaModel tarea) {
		tareaRepository.save(tarea);
		return "tarea insertada correctamente.";
	}
	
	//metodo para modificar una tarea
	
	public String modificar(int id,TareaModel tarea) {
		
		TareaModel t = tareaRepository.findById(id).get();
		
		if(t != null) {
			t.setNombre(tarea.getNombre());
			t.setDescripcion(tarea.getDescripcion());
			t.setEstado(tarea.isEstado());
			tareaRepository.save(t);
			return "Tarea modificada correctamente";
		}
		
		return "error";
	}
	
	//metodo para eliminar tarea
	public String eliminarTarea( int id ) {
		tareaRepository.deleteById(id); //borrado fisico
		return "tarea eliminada correctamente";
	}
}

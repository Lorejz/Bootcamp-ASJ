package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.TareaModel;
import com.example.demo.services.TareaService;

@RestController
@RequestMapping("/tareas")
public class TareaController {
	
	@Autowired
	TareaService tareaService;
	
	
//	@GetMapping("/test")
//	public ResponseEntity<String> testing() {
//		return new ResponseEntity<>("hola mundo",HttpStatus.OK);
//	}
	
	@GetMapping() // [GET]: TODAS LAS TAREAS localhost:8080/tareas
	public ResponseEntity<List<TareaModel>> getTareas() {

		return ResponseEntity.ok( tareaService.obtenerTareas() ); //llamada a SERVICIO (logica de negocio)
	}

	@GetMapping("/{id}") // [GET]: TAREA BY ID localhost:8080/tareas/id
	public ResponseEntity<Optional<TareaModel>> getTareaById(@PathVariable int id) {

		return ResponseEntity.ok( tareaService.obtenerTareaPorId(id) );
	}

	@PostMapping() // [POST]: CREAR TAREA localhost:8080/tareas
	public ResponseEntity<String> createTarea( @RequestBody TareaModel tarea ) {
		return  ResponseEntity.ok( tareaService.crearTarea(tarea) );
	}

	@PutMapping("/{id}") // [PUT]: MODIFICAR TAREA localhost:8080/tareas/id
	public ResponseEntity<String> updateTareaById(@PathVariable int id, @RequestBody TareaModel tarea) {
		return ResponseEntity.ok( tareaService.modificar(id, tarea) );
	}

	@DeleteMapping("/{id}") // [DELETE]: DELETE TAREA localhost:8080/tareas/id
	public ResponseEntity<String> deleteTareaById(@PathVariable int id) {
		return ResponseEntity.ok( tareaService.eliminarTarea(id) );
	}

}

package hu.SzaboTamas.taskboard.controller;

//for general testing purposes

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/api/hello")
    public String hello() {
        return "Hello World!";
    }

    //working as of 2025.11.08
}

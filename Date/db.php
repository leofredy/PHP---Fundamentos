<?php

function cursos() 
{
    return [
        "php" => [
            "id" => 1,
            "name_course" => "Curso de PHP Fundamentos",
            "tool_version" => 7.4,
            "workload" => 40,
            "status" => true
        ],
        
        "javascript" => [
            "id" => 2,
            "name_course" => 
                "Curso de Javascript Basico ao Avançado",
            "tool_version" => "6.14.5",
            "workload" => 100,
            "status" => true
        ],

        "java" => [
            "id" => 3,
            "name_course" => "Curso de Java Fundamentos",
            "tool_version" => 11.4,
            "workload" => 30,
            "status" => false
        ],

        "C#" => [
            "id" => 4,
            "name_course" => "Curso de C# Fundamentos",
            "tool_version" => 5,
            "workload" => 60,
            "status" => false
        ]
    ];
}
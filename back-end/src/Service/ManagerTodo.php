<?php

namespace App\Service;

use Symfony\Component\HttpKernel\KernelInterface;

class ManagerTodo
{
    private $todoFile;


    public function __construct(KernelInterface $kernel)
    {
        $this->todoFile = $kernel->getProjectDir(). '/public/data/db.json';
    }

    public function getAllTodos(): array {
        return json_decode(file_get_contents($this->todoFile), true);
    }

    public function addTodo(array $todo): void {
        $todos = $this->getAllTodos();

        $todos[] = $todo;

        file_put_contents($this->todoFile, json_encode($todos));
    }


}

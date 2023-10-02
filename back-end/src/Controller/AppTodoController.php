<?php

namespace App\Controller;

use App\Service\ManagerTodo;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Exception\FileNotFoundException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class AppTodoController extends AbstractController
{
    private $todoManager;

    /**
     * @param $todoManager
     */
    public function __construct(ManagerTodo $todoManager)
    {
        $this->todoManager = $todoManager;
    }


    #[Route('/api/items', name: 'api_items')]
    public function getJsonData() {
        $jsonFilePath = $this->getParameter('kernel.project_dir').'/public/data/db.json';

        if (!file_exists($jsonFilePath)) {
            throw new FileNotFoundException("The JSON file does not exist");
        }


        $jsonData = file_get_contents($jsonFilePath);

        $data = json_decode($jsonData, true);

        return new JsonResponse($data);
    }

    #[Route('/api/todos', methods: ['POST'])]
    public function create(Request $request) {
        $data = json_decode($request->getContent(), true);

        if (!isset($data['title']) || empty($data['title'])) {
            return $this->json(['error' => 'Todo title is required'], 400);
        }

        $this->todoManager->addTodo($data);

        return $this->json(['message' => 'Todo created successfully.'], 201);
    }
}




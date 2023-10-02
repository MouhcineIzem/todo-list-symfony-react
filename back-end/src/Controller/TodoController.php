<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class TodoController extends AbstractController
{
    #[Route('/api/items', name: 'api_items')]
    public function getData() {
        $data = [
            'message' => 'Hello, world',
            'timestamp' => time()
        ];
        return new JsonResponse($data);
    }
}

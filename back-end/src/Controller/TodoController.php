<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Exception\FileNotFoundException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class TodoController extends AbstractController
{
//    #[Route('/api/items', name: 'api_items')]
//    public function getData() {
//        $data = [
//            'message' => 'Hello, world',
//            'timestamp' => time()
//        ];
//        return new JsonResponse($data);
//    }

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
}

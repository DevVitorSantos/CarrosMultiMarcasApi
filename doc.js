export const swaggerDocument = {
    "swagger": "2.0",
    "info": {
      "title": "API de Marcas de Carros",
      "version": "1.0.0"
    },
    "paths": {
      "/carros/marcas/maisModelos": {
        "get": {
          "summary": "Retorna a marca com mais modelos",
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/carros/marcas/menosModelos": {
        "get": {
          "summary": "Retorna a marca com menos modelos",
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/carros/marcas/listaMaisModelos/{id}": {
        "get": {
          "summary": "Retorna as X marcas com mais modelos",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "Número de marcas a serem retornadas",
              "required": true,
              "type": "integer"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/carros/marcas/listaMenosModelos/{id}": {
        "get": {
          "summary": "Retorna as X marcas com menos modelos",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "Número de marcas a serem retornadas",
              "required": true,
              "type": "integer"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/carros/marcas/listaModelos": {
        "post": {
          "summary": "Retorna a lista de modelos de uma marca específica",
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "required": true,
              "schema": {
                "type": "object",
                "properties": {
                  "marca": {
                    "type": "string",
                    "description": "Nome da marca"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      }
    }
  }
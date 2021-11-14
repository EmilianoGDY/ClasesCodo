# def presentacion(valorApasar):
#     print(valorApasar)

# def carga_suma():
#     valor1=int(input("Ingrese el primer valor: "))
#     valor2=int(input("Ingrese el segundo valor: "))
#     sumar=valor1+valor2
#     print("La suma de los dos valores es: {}".format(sumar))




# presentacion("Hola!!!")
# carga_suma()
# presentacion("Nos Vemos!!!")

def mostrar_lista(lista):
    print(lista)


def carga_lista():
    lista = []
    for x in range(5):
        valor = input("Ingrese los nombres para cargar la lista: ")
        lista.append(valor)
    mostrar_lista(lista)


carga_lista()
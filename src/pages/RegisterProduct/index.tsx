import { StylesForm, StylesInputTask, ContainerRegisterPage } from "./styles";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import axios from "axios";
import { ProductProps } from "../../components/Product";

const rulesValidationsForm = zod.object({
    name: zod.string()
        .min(1, "Por favor digite um nome de um produto"),

    brand: zod.string()
        .min(1, "Por favor digite uma marca"),

    value: zod.string()
        .min(1, "Por favor digite um valor"),

    category: zod.string()
        .min(1, "Por favor digite uma categoria"),

    imageSrc: zod.string()
        .min(1, "Por favor digite uma URL"),
})

type formTypeData = zod.infer<typeof rulesValidationsForm>

export function Register() {
    const newCycleForm = useForm<formTypeData>({
        resolver: zodResolver(rulesValidationsForm),
        defaultValues: {
            name: '',
            brand: '',
            value: '',
            category: '',
            imageSrc: '',
        }
    })

    const { handleSubmit, watch, reset, register } = newCycleForm

    function handleCreateNewCycle(data: formTypeData) {
        CreateNewCycle(data)
        reset()
    }

    function CreateNewCycle(data: ProductProps) {
        if(Number(data.value) <= 0){
            return
        }

        if(data.name.search(/[^a-zA-Z0-9]+/g) !== -1 ){
            return
        }
        const newProduct: ProductProps = {
            brand: data.brand,
            category: data.category,
            imageSrc: data.imageSrc,
            name: data.name,
            value: data.value,
            id: data.id
        }

        axios.post('https://apigenerator.dronahq.com/api/MNdw05qQ/produtos', newProduct)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <ContainerRegisterPage>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">

                <FormProvider {...newCycleForm}>
                    <StylesForm>
                        <label htmlFor="task">Cadastrar Produto</label>
                        <StylesInputTask
                            placeholder="Adicione o nome do Produto"
                            id="name"
                            type="text"
                            {...register("name")}
                        />

                        <StylesInputTask
                            placeholder="Adicione a marca do Produto"
                            id="brand"
                            type="text"
                            {...register("brand")}
                        />

                        <StylesInputTask
                            placeholder="Adicione o valor do Produto"
                            id="value"
                            type="text"
                            {...register("value")}
                        />

                        <StylesInputTask
                            placeholder="Adicione a categoria do Produto"
                            id="category"
                            type="text"
                            {...register("category")}
                        />

                        <StylesInputTask
                            placeholder="Adicione a imagem do Produto"
                            id="imageSrc"
                            type="text"
                            {...register("imageSrc")}
                        />

                        <button type="submit">Enviar</button>
                    </StylesForm>
                </FormProvider>
            </form>
        </ContainerRegisterPage>
    )
}
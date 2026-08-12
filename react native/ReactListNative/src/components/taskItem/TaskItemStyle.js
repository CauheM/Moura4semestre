import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    TaskItemBox: {
        width: '100%',
        minHeight: 70,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#31364D',
        borderRadius: 5,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    TaskItemText: {
        flex: 1,
        paddingLeft: 10,
        textAlign: 'left',
        fontSize: 24,
        color: '#fff',
    },
    CardBoxIcon: {
        flexDirection: 'row',
        gap: 24,
        paddingRight: 25

    },
    iconPen: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#9bb8ed',
        borderRadius: 6,
    },
    iconTrash: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#d46e75',
        borderRadius: 6,
    },

    iconimg: {
        width: 35,
        height: 40,
    },

    ModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        fontSize: 44,
        backgroundColor: 'rgb(0, 0, 0, 0.65)',

    },

    ModalBox: {
        gap: 20,
        alignItems: 'center',
        textAlign: 'center',
        width: '60%',
        height: 500,
        backgroundColor: '#111111',
        borderRadius: 5,
        padding: 20,
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
        transform: 'translateY(20px)'

    },

    ModalTitle: {
        fontSize: 40,
        fontWeight: 700,
        marginBottom: 6,
        color: 'white',


    },
    ModalInput: {
        width: '75%',
        height: 50,
        fontSize: 18,
        borderRadius: 5,
        paddingLeft: 10,
        backgroundColor: 'white',


    },

    ModalButtons: {
        width: '75%',
        gap: 25,

    },

    ModalButtonsArea: {
        height: 40,
        borderRadius: 5,

        justifyContent: 'center',
        alignItems: 'center',
    },


    ModalButtonsText: {
        color: 'white',
        fontSize: 18,
    },

    Cancelar: {
        backgroundColor: 'red',
    },

    Salvar: {
        backgroundColor: '#60a771'
    },

})

export const estilosModal = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "#1D2135",
        borderRadius: 10,
        padding: 20,
        width: "85%",
        Height: "80%",
    },
    titulo: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 15,
        color: "#ffffff",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 12,
        marginBottom: 20,
        fontSize: 16,
        color: "#ffffff",
    },
    botoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
    },
    botao: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    botaoCancelar: {
        backgroundColor: "#b40000",
    },
    botaoSalvar: {
        backgroundColor: "#4CAF50",
    },
    textoBotao: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#fff",
    },
});

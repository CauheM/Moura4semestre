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

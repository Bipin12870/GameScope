import { Ionicons } from "@expo/vector-icons";

export function ValidIndicator (prop : any) {
    if ( prop.valid) {
        return (
            <Ionicons name="checkmark" size = {18} color= "green" />
        )
    }
}
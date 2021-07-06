import { Instance } from "mobx-state-tree"
import { PokemonV2MachineVarPopFieldsModelBase } from "./PokemonV2MachineVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MachineVarPopFieldsModel */
export interface PokemonV2MachineVarPopFieldsModelType extends Instance<typeof PokemonV2MachineVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MachineVarPopFieldsModel */
export { selectFromPokemonV2MachineVarPopFields, pokemonV2MachineVarPopFieldsModelPrimitives, PokemonV2MachineVarPopFieldsModelSelector } from "./PokemonV2MachineVarPopFieldsModel.base"

/**
 * PokemonV2MachineVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MachineVarPopFieldsModel = PokemonV2MachineVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonstatVarPopFieldsModelBase } from "./PokemonV2PokemonstatVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonstatVarPopFieldsModel */
export interface PokemonV2PokemonstatVarPopFieldsModelType extends Instance<typeof PokemonV2PokemonstatVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonstatVarPopFieldsModel */
export { selectFromPokemonV2PokemonstatVarPopFields, pokemonV2PokemonstatVarPopFieldsModelPrimitives, PokemonV2PokemonstatVarPopFieldsModelSelector } from "./PokemonV2PokemonstatVarPopFieldsModel.base"

/**
 * PokemonV2PokemonstatVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonstatVarPopFieldsModel = PokemonV2PokemonstatVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

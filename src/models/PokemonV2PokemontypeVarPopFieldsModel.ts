import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypeVarPopFieldsModelBase } from "./PokemonV2PokemontypeVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypeVarPopFieldsModel */
export interface PokemonV2PokemontypeVarPopFieldsModelType extends Instance<typeof PokemonV2PokemontypeVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypeVarPopFieldsModel */
export { selectFromPokemonV2PokemontypeVarPopFields, pokemonV2PokemontypeVarPopFieldsModelPrimitives, PokemonV2PokemontypeVarPopFieldsModelSelector } from "./PokemonV2PokemontypeVarPopFieldsModel.base"

/**
 * PokemonV2PokemontypeVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemontypeVarPopFieldsModel = PokemonV2PokemontypeVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

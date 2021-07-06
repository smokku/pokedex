import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassVarPopFieldsModelBase } from "./PokemonV2MovedamageclassVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassVarPopFieldsModel */
export interface PokemonV2MovedamageclassVarPopFieldsModelType extends Instance<typeof PokemonV2MovedamageclassVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassVarPopFieldsModel */
export { selectFromPokemonV2MovedamageclassVarPopFields, pokemonV2MovedamageclassVarPopFieldsModelPrimitives, PokemonV2MovedamageclassVarPopFieldsModelSelector } from "./PokemonV2MovedamageclassVarPopFieldsModel.base"

/**
 * PokemonV2MovedamageclassVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovedamageclassVarPopFieldsModel = PokemonV2MovedamageclassVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

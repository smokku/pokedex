import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestyleMaxFieldsModelBase } from "./PokemonV2MovebattlestyleMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestyleMaxFieldsModel */
export interface PokemonV2MovebattlestyleMaxFieldsModelType extends Instance<typeof PokemonV2MovebattlestyleMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestyleMaxFieldsModel */
export { selectFromPokemonV2MovebattlestyleMaxFields, pokemonV2MovebattlestyleMaxFieldsModelPrimitives, PokemonV2MovebattlestyleMaxFieldsModelSelector } from "./PokemonV2MovebattlestyleMaxFieldsModel.base"

/**
 * PokemonV2MovebattlestyleMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MovebattlestyleMaxFieldsModel = PokemonV2MovebattlestyleMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

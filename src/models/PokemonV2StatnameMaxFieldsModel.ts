import { Instance } from "mobx-state-tree"
import { PokemonV2StatnameMaxFieldsModelBase } from "./PokemonV2StatnameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2StatnameMaxFieldsModel */
export interface PokemonV2StatnameMaxFieldsModelType extends Instance<typeof PokemonV2StatnameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatnameMaxFieldsModel */
export { selectFromPokemonV2StatnameMaxFields, pokemonV2StatnameMaxFieldsModelPrimitives, PokemonV2StatnameMaxFieldsModelSelector } from "./PokemonV2StatnameMaxFieldsModel.base"

/**
 * PokemonV2StatnameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2StatnameMaxFieldsModel = PokemonV2StatnameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

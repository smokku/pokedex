import { Instance } from "mobx-state-tree"
import { PokemonV2ItemnameMaxFieldsModelBase } from "./PokemonV2ItemnameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemnameMaxFieldsModel */
export interface PokemonV2ItemnameMaxFieldsModelType extends Instance<typeof PokemonV2ItemnameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemnameMaxFieldsModel */
export { selectFromPokemonV2ItemnameMaxFields, pokemonV2ItemnameMaxFieldsModelPrimitives, PokemonV2ItemnameMaxFieldsModelSelector } from "./PokemonV2ItemnameMaxFieldsModel.base"

/**
 * PokemonV2ItemnameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ItemnameMaxFieldsModel = PokemonV2ItemnameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

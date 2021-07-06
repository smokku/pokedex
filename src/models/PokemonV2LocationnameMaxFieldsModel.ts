import { Instance } from "mobx-state-tree"
import { PokemonV2LocationnameMaxFieldsModelBase } from "./PokemonV2LocationnameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationnameMaxFieldsModel */
export interface PokemonV2LocationnameMaxFieldsModelType extends Instance<typeof PokemonV2LocationnameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationnameMaxFieldsModel */
export { selectFromPokemonV2LocationnameMaxFields, pokemonV2LocationnameMaxFieldsModelPrimitives, PokemonV2LocationnameMaxFieldsModelSelector } from "./PokemonV2LocationnameMaxFieldsModel.base"

/**
 * PokemonV2LocationnameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2LocationnameMaxFieldsModel = PokemonV2LocationnameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

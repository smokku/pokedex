import { Instance } from "mobx-state-tree"
import { PokemonV2TypenameMaxFieldsModelBase } from "./PokemonV2TypenameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypenameMaxFieldsModel */
export interface PokemonV2TypenameMaxFieldsModelType extends Instance<typeof PokemonV2TypenameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypenameMaxFieldsModel */
export { selectFromPokemonV2TypenameMaxFields, pokemonV2TypenameMaxFieldsModelPrimitives, PokemonV2TypenameMaxFieldsModelSelector } from "./PokemonV2TypenameMaxFieldsModel.base"

/**
 * PokemonV2TypenameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2TypenameMaxFieldsModel = PokemonV2TypenameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

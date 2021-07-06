import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationnameMaxFieldsModelBase } from "./PokemonV2GenerationnameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationnameMaxFieldsModel */
export interface PokemonV2GenerationnameMaxFieldsModelType extends Instance<typeof PokemonV2GenerationnameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationnameMaxFieldsModel */
export { selectFromPokemonV2GenerationnameMaxFields, pokemonV2GenerationnameMaxFieldsModelPrimitives, PokemonV2GenerationnameMaxFieldsModelSelector } from "./PokemonV2GenerationnameMaxFieldsModel.base"

/**
 * PokemonV2GenerationnameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2GenerationnameMaxFieldsModel = PokemonV2GenerationnameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

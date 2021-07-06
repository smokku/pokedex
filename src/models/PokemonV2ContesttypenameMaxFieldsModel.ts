import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypenameMaxFieldsModelBase } from "./PokemonV2ContesttypenameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypenameMaxFieldsModel */
export interface PokemonV2ContesttypenameMaxFieldsModelType extends Instance<typeof PokemonV2ContesttypenameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypenameMaxFieldsModel */
export { selectFromPokemonV2ContesttypenameMaxFields, pokemonV2ContesttypenameMaxFieldsModelPrimitives, PokemonV2ContesttypenameMaxFieldsModelSelector } from "./PokemonV2ContesttypenameMaxFieldsModel.base"

/**
 * PokemonV2ContesttypenameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ContesttypenameMaxFieldsModel = PokemonV2ContesttypenameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

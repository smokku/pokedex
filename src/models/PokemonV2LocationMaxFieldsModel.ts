import { Instance } from "mobx-state-tree"
import { PokemonV2LocationMaxFieldsModelBase } from "./PokemonV2LocationMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationMaxFieldsModel */
export interface PokemonV2LocationMaxFieldsModelType extends Instance<typeof PokemonV2LocationMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationMaxFieldsModel */
export { selectFromPokemonV2LocationMaxFields, pokemonV2LocationMaxFieldsModelPrimitives, PokemonV2LocationMaxFieldsModelSelector } from "./PokemonV2LocationMaxFieldsModel.base"

/**
 * PokemonV2LocationMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2LocationMaxFieldsModel = PokemonV2LocationMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

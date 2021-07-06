import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaMaxFieldsModelBase } from "./PokemonV2MovemetaMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaMaxFieldsModel */
export interface PokemonV2MovemetaMaxFieldsModelType extends Instance<typeof PokemonV2MovemetaMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaMaxFieldsModel */
export { selectFromPokemonV2MovemetaMaxFields, pokemonV2MovemetaMaxFieldsModelPrimitives, PokemonV2MovemetaMaxFieldsModelSelector } from "./PokemonV2MovemetaMaxFieldsModel.base"

/**
 * PokemonV2MovemetaMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MovemetaMaxFieldsModel = PokemonV2MovemetaMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

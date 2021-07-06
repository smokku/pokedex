import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentMaxFieldsModelBase } from "./PokemonV2MovemetaailmentMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentMaxFieldsModel */
export interface PokemonV2MovemetaailmentMaxFieldsModelType extends Instance<typeof PokemonV2MovemetaailmentMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentMaxFieldsModel */
export { selectFromPokemonV2MovemetaailmentMaxFields, pokemonV2MovemetaailmentMaxFieldsModelPrimitives, PokemonV2MovemetaailmentMaxFieldsModelSelector } from "./PokemonV2MovemetaailmentMaxFieldsModel.base"

/**
 * PokemonV2MovemetaailmentMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MovemetaailmentMaxFieldsModel = PokemonV2MovemetaailmentMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

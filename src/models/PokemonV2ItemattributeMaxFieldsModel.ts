import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributeMaxFieldsModelBase } from "./PokemonV2ItemattributeMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributeMaxFieldsModel */
export interface PokemonV2ItemattributeMaxFieldsModelType extends Instance<typeof PokemonV2ItemattributeMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributeMaxFieldsModel */
export { selectFromPokemonV2ItemattributeMaxFields, pokemonV2ItemattributeMaxFieldsModelPrimitives, PokemonV2ItemattributeMaxFieldsModelSelector } from "./PokemonV2ItemattributeMaxFieldsModel.base"

/**
 * PokemonV2ItemattributeMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ItemattributeMaxFieldsModel = PokemonV2ItemattributeMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

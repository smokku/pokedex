import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributeMaxFieldsModelBase } from "./PokemonV2MoveattributeMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributeMaxFieldsModel */
export interface PokemonV2MoveattributeMaxFieldsModelType extends Instance<typeof PokemonV2MoveattributeMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributeMaxFieldsModel */
export { selectFromPokemonV2MoveattributeMaxFields, pokemonV2MoveattributeMaxFieldsModelPrimitives, PokemonV2MoveattributeMaxFieldsModelSelector } from "./PokemonV2MoveattributeMaxFieldsModel.base"

/**
 * PokemonV2MoveattributeMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MoveattributeMaxFieldsModel = PokemonV2MoveattributeMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

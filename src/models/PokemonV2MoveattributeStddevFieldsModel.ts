import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributeStddevFieldsModelBase } from "./PokemonV2MoveattributeStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributeStddevFieldsModel */
export interface PokemonV2MoveattributeStddevFieldsModelType extends Instance<typeof PokemonV2MoveattributeStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributeStddevFieldsModel */
export { selectFromPokemonV2MoveattributeStddevFields, pokemonV2MoveattributeStddevFieldsModelPrimitives, PokemonV2MoveattributeStddevFieldsModelSelector } from "./PokemonV2MoveattributeStddevFieldsModel.base"

/**
 * PokemonV2MoveattributeStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MoveattributeStddevFieldsModel = PokemonV2MoveattributeStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

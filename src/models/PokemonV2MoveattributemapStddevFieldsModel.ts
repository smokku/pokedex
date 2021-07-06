import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributemapStddevFieldsModelBase } from "./PokemonV2MoveattributemapStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributemapStddevFieldsModel */
export interface PokemonV2MoveattributemapStddevFieldsModelType extends Instance<typeof PokemonV2MoveattributemapStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributemapStddevFieldsModel */
export { selectFromPokemonV2MoveattributemapStddevFields, pokemonV2MoveattributemapStddevFieldsModelPrimitives, PokemonV2MoveattributemapStddevFieldsModelSelector } from "./PokemonV2MoveattributemapStddevFieldsModel.base"

/**
 * PokemonV2MoveattributemapStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MoveattributemapStddevFieldsModel = PokemonV2MoveattributemapStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

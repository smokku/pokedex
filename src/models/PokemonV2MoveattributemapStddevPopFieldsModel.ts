import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributemapStddevPopFieldsModelBase } from "./PokemonV2MoveattributemapStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributemapStddevPopFieldsModel */
export interface PokemonV2MoveattributemapStddevPopFieldsModelType extends Instance<typeof PokemonV2MoveattributemapStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributemapStddevPopFieldsModel */
export { selectFromPokemonV2MoveattributemapStddevPopFields, pokemonV2MoveattributemapStddevPopFieldsModelPrimitives, PokemonV2MoveattributemapStddevPopFieldsModelSelector } from "./PokemonV2MoveattributemapStddevPopFieldsModel.base"

/**
 * PokemonV2MoveattributemapStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MoveattributemapStddevPopFieldsModel = PokemonV2MoveattributemapStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

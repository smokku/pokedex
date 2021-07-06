import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthratedescriptionStddevPopFieldsModelBase } from "./PokemonV2GrowthratedescriptionStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthratedescriptionStddevPopFieldsModel */
export interface PokemonV2GrowthratedescriptionStddevPopFieldsModelType extends Instance<typeof PokemonV2GrowthratedescriptionStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthratedescriptionStddevPopFieldsModel */
export { selectFromPokemonV2GrowthratedescriptionStddevPopFields, pokemonV2GrowthratedescriptionStddevPopFieldsModelPrimitives, PokemonV2GrowthratedescriptionStddevPopFieldsModelSelector } from "./PokemonV2GrowthratedescriptionStddevPopFieldsModel.base"

/**
 * PokemonV2GrowthratedescriptionStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2GrowthratedescriptionStddevPopFieldsModel = PokemonV2GrowthratedescriptionStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

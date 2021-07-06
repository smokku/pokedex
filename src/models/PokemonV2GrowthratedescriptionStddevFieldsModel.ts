import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthratedescriptionStddevFieldsModelBase } from "./PokemonV2GrowthratedescriptionStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthratedescriptionStddevFieldsModel */
export interface PokemonV2GrowthratedescriptionStddevFieldsModelType extends Instance<typeof PokemonV2GrowthratedescriptionStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthratedescriptionStddevFieldsModel */
export { selectFromPokemonV2GrowthratedescriptionStddevFields, pokemonV2GrowthratedescriptionStddevFieldsModelPrimitives, PokemonV2GrowthratedescriptionStddevFieldsModelSelector } from "./PokemonV2GrowthratedescriptionStddevFieldsModel.base"

/**
 * PokemonV2GrowthratedescriptionStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2GrowthratedescriptionStddevFieldsModel = PokemonV2GrowthratedescriptionStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

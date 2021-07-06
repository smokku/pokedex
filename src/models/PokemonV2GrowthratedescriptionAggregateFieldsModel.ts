import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthratedescriptionAggregateFieldsModelBase } from "./PokemonV2GrowthratedescriptionAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthratedescriptionAggregateFieldsModel */
export interface PokemonV2GrowthratedescriptionAggregateFieldsModelType extends Instance<typeof PokemonV2GrowthratedescriptionAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthratedescriptionAggregateFieldsModel */
export { selectFromPokemonV2GrowthratedescriptionAggregateFields, pokemonV2GrowthratedescriptionAggregateFieldsModelPrimitives, PokemonV2GrowthratedescriptionAggregateFieldsModelSelector } from "./PokemonV2GrowthratedescriptionAggregateFieldsModel.base"

/**
 * PokemonV2GrowthratedescriptionAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_growthratedescription"
 */
export const PokemonV2GrowthratedescriptionAggregateFieldsModel = PokemonV2GrowthratedescriptionAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

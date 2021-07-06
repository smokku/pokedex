import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectAggregateFieldsModelBase } from "./PokemonV2SupercontesteffectAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectAggregateFieldsModel */
export interface PokemonV2SupercontesteffectAggregateFieldsModelType extends Instance<typeof PokemonV2SupercontesteffectAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectAggregateFieldsModel */
export { selectFromPokemonV2SupercontesteffectAggregateFields, pokemonV2SupercontesteffectAggregateFieldsModelPrimitives, PokemonV2SupercontesteffectAggregateFieldsModelSelector } from "./PokemonV2SupercontesteffectAggregateFieldsModel.base"

/**
 * PokemonV2SupercontesteffectAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_supercontesteffect"
 */
export const PokemonV2SupercontesteffectAggregateFieldsModel = PokemonV2SupercontesteffectAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

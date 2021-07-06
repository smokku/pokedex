import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectflavortextAggregateFieldsModelBase } from "./PokemonV2SupercontesteffectflavortextAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectflavortextAggregateFieldsModel */
export interface PokemonV2SupercontesteffectflavortextAggregateFieldsModelType extends Instance<typeof PokemonV2SupercontesteffectflavortextAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectflavortextAggregateFieldsModel */
export { selectFromPokemonV2SupercontesteffectflavortextAggregateFields, pokemonV2SupercontesteffectflavortextAggregateFieldsModelPrimitives, PokemonV2SupercontesteffectflavortextAggregateFieldsModelSelector } from "./PokemonV2SupercontesteffectflavortextAggregateFieldsModel.base"

/**
 * PokemonV2SupercontesteffectflavortextAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_supercontesteffectflavortext"
 */
export const PokemonV2SupercontesteffectflavortextAggregateFieldsModel = PokemonV2SupercontesteffectflavortextAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

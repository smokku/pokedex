import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectflavortextModelBase } from "./PokemonV2SupercontesteffectflavortextModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectflavortextModel */
export interface PokemonV2SupercontesteffectflavortextModelType extends Instance<typeof PokemonV2SupercontesteffectflavortextModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectflavortextModel */
export { selectFromPokemonV2Supercontesteffectflavortext, pokemonV2SupercontesteffectflavortextModelPrimitives, PokemonV2SupercontesteffectflavortextModelSelector } from "./PokemonV2SupercontesteffectflavortextModel.base"

/**
 * PokemonV2SupercontesteffectflavortextModel
 *
 * columns and relationships of "pokemon_v2_supercontesteffectflavortext"
 */
export const PokemonV2SupercontesteffectflavortextModel = PokemonV2SupercontesteffectflavortextModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

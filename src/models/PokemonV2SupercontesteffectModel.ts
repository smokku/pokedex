import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectModelBase } from "./PokemonV2SupercontesteffectModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectModel */
export interface PokemonV2SupercontesteffectModelType extends Instance<typeof PokemonV2SupercontesteffectModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectModel */
export { selectFromPokemonV2Supercontesteffect, pokemonV2SupercontesteffectModelPrimitives, PokemonV2SupercontesteffectModelSelector } from "./PokemonV2SupercontesteffectModel.base"

/**
 * PokemonV2SupercontesteffectModel
 *
 * columns and relationships of "pokemon_v2_supercontesteffect"
 */
export const PokemonV2SupercontesteffectModel = PokemonV2SupercontesteffectModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

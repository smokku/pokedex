import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavormapModelBase } from "./PokemonV2BerryflavormapModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavormapModel */
export interface PokemonV2BerryflavormapModelType extends Instance<typeof PokemonV2BerryflavormapModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavormapModel */
export { selectFromPokemonV2Berryflavormap, pokemonV2BerryflavormapModelPrimitives, PokemonV2BerryflavormapModelSelector } from "./PokemonV2BerryflavormapModel.base"

/**
 * PokemonV2BerryflavormapModel
 *
 * columns and relationships of "pokemon_v2_berryflavormap"
 */
export const PokemonV2BerryflavormapModel = PokemonV2BerryflavormapModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

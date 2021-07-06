import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetastatchangeModelBase } from "./PokemonV2MovemetastatchangeModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetastatchangeModel */
export interface PokemonV2MovemetastatchangeModelType extends Instance<typeof PokemonV2MovemetastatchangeModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetastatchangeModel */
export { selectFromPokemonV2Movemetastatchange, pokemonV2MovemetastatchangeModelPrimitives, PokemonV2MovemetastatchangeModelSelector } from "./PokemonV2MovemetastatchangeModel.base"

/**
 * PokemonV2MovemetastatchangeModel
 *
 * columns and relationships of "pokemon_v2_movemetastatchange"
 */
export const PokemonV2MovemetastatchangeModel = PokemonV2MovemetastatchangeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

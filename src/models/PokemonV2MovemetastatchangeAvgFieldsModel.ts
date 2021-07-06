import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetastatchangeAvgFieldsModelBase } from "./PokemonV2MovemetastatchangeAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetastatchangeAvgFieldsModel */
export interface PokemonV2MovemetastatchangeAvgFieldsModelType extends Instance<typeof PokemonV2MovemetastatchangeAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetastatchangeAvgFieldsModel */
export { selectFromPokemonV2MovemetastatchangeAvgFields, pokemonV2MovemetastatchangeAvgFieldsModelPrimitives, PokemonV2MovemetastatchangeAvgFieldsModelSelector } from "./PokemonV2MovemetastatchangeAvgFieldsModel.base"

/**
 * PokemonV2MovemetastatchangeAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MovemetastatchangeAvgFieldsModel = PokemonV2MovemetastatchangeAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

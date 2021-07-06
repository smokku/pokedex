import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetastatchangeStddevFieldsModelBase } from "./PokemonV2MovemetastatchangeStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetastatchangeStddevFieldsModel */
export interface PokemonV2MovemetastatchangeStddevFieldsModelType extends Instance<typeof PokemonV2MovemetastatchangeStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetastatchangeStddevFieldsModel */
export { selectFromPokemonV2MovemetastatchangeStddevFields, pokemonV2MovemetastatchangeStddevFieldsModelPrimitives, PokemonV2MovemetastatchangeStddevFieldsModelSelector } from "./PokemonV2MovemetastatchangeStddevFieldsModel.base"

/**
 * PokemonV2MovemetastatchangeStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovemetastatchangeStddevFieldsModel = PokemonV2MovemetastatchangeStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

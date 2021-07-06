import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetastatchangeSumFieldsModelBase } from "./PokemonV2MovemetastatchangeSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetastatchangeSumFieldsModel */
export interface PokemonV2MovemetastatchangeSumFieldsModelType extends Instance<typeof PokemonV2MovemetastatchangeSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetastatchangeSumFieldsModel */
export { selectFromPokemonV2MovemetastatchangeSumFields, pokemonV2MovemetastatchangeSumFieldsModelPrimitives, PokemonV2MovemetastatchangeSumFieldsModelSelector } from "./PokemonV2MovemetastatchangeSumFieldsModel.base"

/**
 * PokemonV2MovemetastatchangeSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MovemetastatchangeSumFieldsModel = PokemonV2MovemetastatchangeSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

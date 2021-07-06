import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategoryStddevFieldsModelBase } from "./PokemonV2MovemetacategoryStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategoryStddevFieldsModel */
export interface PokemonV2MovemetacategoryStddevFieldsModelType extends Instance<typeof PokemonV2MovemetacategoryStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategoryStddevFieldsModel */
export { selectFromPokemonV2MovemetacategoryStddevFields, pokemonV2MovemetacategoryStddevFieldsModelPrimitives, PokemonV2MovemetacategoryStddevFieldsModelSelector } from "./PokemonV2MovemetacategoryStddevFieldsModel.base"

/**
 * PokemonV2MovemetacategoryStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovemetacategoryStddevFieldsModel = PokemonV2MovemetacategoryStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

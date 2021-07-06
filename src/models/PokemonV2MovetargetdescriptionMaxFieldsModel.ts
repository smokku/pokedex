import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetdescriptionMaxFieldsModelBase } from "./PokemonV2MovetargetdescriptionMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetdescriptionMaxFieldsModel */
export interface PokemonV2MovetargetdescriptionMaxFieldsModelType extends Instance<typeof PokemonV2MovetargetdescriptionMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetdescriptionMaxFieldsModel */
export { selectFromPokemonV2MovetargetdescriptionMaxFields, pokemonV2MovetargetdescriptionMaxFieldsModelPrimitives, PokemonV2MovetargetdescriptionMaxFieldsModelSelector } from "./PokemonV2MovetargetdescriptionMaxFieldsModel.base"

/**
 * PokemonV2MovetargetdescriptionMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MovetargetdescriptionMaxFieldsModel = PokemonV2MovetargetdescriptionMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
